export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style changes (formatting, etc.)
        "refactor", // Code refactoring
        "test", // Adding or updating tests
        "chore", // Maintenance tasks (e.g., dependency updates)
        "ci", // CI/CD changes
        "perf", // Performance improvements
        "revert", // Revert a previous commit
      ],
    ],
    "subject-case": [2, "always", "sentence-case"], // Enforce sentence case for the subject
  },
};
