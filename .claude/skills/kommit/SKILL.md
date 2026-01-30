---
name: kommit
description: Generate commit messages following Conventional Commits specification with emoji prefix
---

# Custom Instruction
When user types `/commit`, follow these steps:

1. Run these commands in parallel to check current status:
   - `git status` - Check untracked files
   - `git diff` - Check staged and unstaged changes
   - `git log -5 --oneline` - Check recent commit history

2. Analyze all changes and choose appropriate type and emoji

3. Generate commit message in format:
   ```
   <emoji> <type>: <description>

   [Optional detailed description]
   ```

4. Run commands to create commit:
   - `git add <relevant files>`
   - `git commit -m "commit message"`
   - `git status` - Verify success

5. Important notes:
   - Always create NEW commits, never use --amend
   - Don't push to remote unless user explicitly requests
   - Don't create empty commit if no changes
   - Don't commit sensitive files (.env, credentials.json, etc.)

## Rules
- **Format**: Use Conventional Commits specification
- **Language**: Commit message body must be in Chinese (file paths, field names can be in any language)
- **Length**: First line title under 50 characters
- Must include emoji before description
- Basic format: <type>: <description>

## Execution
1. Generate Commit Message based on analysis
2. Show me the generated message
3. Ask: "主人，这个提交信息满意吗？[y/N]"
4. If I confirm, run `git commit -m "<message>"`

## Type and Corresponding Emoji

| Type | Emoji | Description | Example |
|------|-------|-------------|---------|
| feat | ✨ | New feature | ✨ feat: Add user authentication system |
| fix | 🐛 | Bug fix | 🐛 fix: Solve login timeout issue |
| docs | 📝 | Documentation update | 📝 docs: Update API documentation |
| style | 💄 | Code format adjustments | 💄 style: Format code with prettier |
| refactor | ♻️ | Code refactoring | ♻️ refactor: Refactor user service logic |
| perf | ⚡️ | Performance optimization | ⚡️ perf: Optimize database queries |
| test | ✅ | Testing related | ✅ test: Add unit tests for authentication |
| build | 📦 | Build system/dependency updates | 📦 build: Upgrade to node version 20 |
| ci | 🔧 | CI configuration | 🔧 ci: Add github actions workflow |
| chore | 🔨 | Miscellaneous other tasks | 🔨 chore: Update .gitignore |

## Commit Message Examples
Good examples:
- ✨ feat: Add user authentication system
- 🐛 fix: Fix memory leak in worker
- 📝 docs: Add deployment guide
- 💄 style: Format code with Prettier
- ♻️ refactor: Extract common utility functions
- ⚡️ perf: Cache database query results
- ✅ test: Add integration tests
- 📦 build: Upgrade to Wrangler 4.0
- 🔧 ci: Add code check in GitHub Actions
- 🔨 chore: Clean up unused imports
