# 系统架构设计 (System Design)

## 1. 技术栈 (Tech Stack)
*   **Frontend**: HTML5 + Vue 3 (CDN) + Tailwind CSS (CDN)。单页应用 (SPA)。
*   **Backend**: Cloudflare Workers + Hono (Web框架) + Zod (校验)。
*   **Database**: Cloudflare D1 (SQLite)。
*   **ORM**: Drizzle ORM。
*   **Security**: SHA-256 (Lookup) + Salt / JWT (Session)。

## 2. 数据库模型 (ER Diagram)

采用 **动静分离** 与 **范式化** 设计：

1.  **`users`**: 用户表。存储 `access_code_hash` (SHA-256 + Salt)。
2.  **`events`**: 用户事件主表。`owner_id` 为空代表家庭公共事件。
3.  **`event_logs`**: 事件历史流水表。
4.  **`event_definitions` (静)**: 节气/假日的元数据（名称、诗句、Emoji）。`name` 为唯一键。
5.  **`calendar_schedules` (动)**: 具体的日期排期表。关联 `definition_name`。
6.  **`quotes`**: 吉言表。区分 `schedule_date`（定时）和 `is_used`（随机状态）。

## 3. 接口鉴权设计 (Security)

*   **用户登录**：
    *   前端发送明文 `code` (HTTPS 保护)。
    *   后端计算 `Hash(code + env.SALT)`，比对数据库。
    *   成功后签发 `JWT Token`。
*   **业务接口**：
    *   Header 携带 `Authorization: Bearer <JWT>`。
*   **自动化接口 (`/daily-briefing`)**：
    *   URL Query 携带 `?token=<SYSTEM_API_KEY>`。
    *   Key 存储在 Cloudflare Secrets 中。

---

# 🔌 第三部分：运维与环境手册 (DevOps Manual)

## 1. 多环境隔离策略

我们通过 `wrangler.jsonc` 配置实现了环境隔离。

| 配置项 | **测试环境 (Test)** | **生产环境 (Prod)** |
| :--- | :--- | :--- |
| **命令标识** | `--env test` | (默认不加) |
| **Worker Host** | `suisui-backend-test...` | `api.suisui...` |
| **Database** | `db_for_ages_test` | `db_for_ages_prod` |
| **Secrets** | 测试用的 Salt/Key | 正式用的 Salt/Key |

## 2. 密钥管理 (Secrets)

**切记：代码里没有密码，全在环境变量里。**

*   **本地开发 (`.dev.vars`)**:
    ```properties
    JWT_SECRET="local_dev_jwt_secret"
    PASSWORD_SALT="local_salt_123"
    SYSTEM_API_KEY="sk_local_key"
    ```
*   **线上部署 (Cloudflare Dashboard / CLI)**:
    ```bash
    # 生产环境
    npx wrangler secret put PASSWORD_SALT
    # 测试环境
    npx wrangler secret put PASSWORD_SALT --env test
    ```

## 3. 数据初始化指南 (Data Seeding)

### A. 如何生成用户 (Users) 的哈希数据？
因为密码是加盐哈希的，不能直接手写 INSERT 语句。请使用项目根目录下的工具脚本：

1.  **修改脚本**：打开 `generate_sql.js`，确认 `USERS` 列表是你想要的。
2.  **运行生成**：
    ```bash
    # 传入你设置的 SALT (必须与环境一致)
    node generate_sql.js "你的_PASSWORD_SALT"
    ```
3.  **获取 SQL**：复制终端输出的 `INSERT INTO users...` 语句。

### B. 如何灌入数据？
将生成的 SQL 保存为文件（如 `seed_users.sql`），以及之前准备好的 `seed_calendar_v2.sql`。

**测试环境灌数：**
```bash
# 1. 灌用户
npx wrangler d1 execute db_for_ages_test --remote --file=./seed_users.sql --env test

# 2. 灌日历与百科
npx wrangler d1 execute db_for_ages_test --remote --file=./seed_calendar_v2.sql --env test

# 3. (可选) 迁移旧数据
npx wrangler d1 execute db_for_ages_test --remote --file=./migrate_old_data.sql --env test
```

**(生产环境同理，去掉 `--env test` 并将 DB 名称改为生产库即可)**

---

### 4. 常用开发命令速查表

| 操作 | 命令 |
| :--- | :--- |
| **启动本地后端** | `npm run dev` |
| **生成数据库 Schema** | `npx drizzle-kit generate` |
| **部署测试环境** | `npm run deploy -- --env test` |
| **部署生产环境** | `npm run deploy` |
| **查看测试日志** | `npx wrangler tail --env test` |
