# 欢迎使用多语言文档站点

这是一个使用 Sphinx 部署的、支持多语言主题切换的 Markdown 文档站点示例。

## 功能特性

- 支持中英文切换
- 使用 Markdown 编写文档
- 响应式主题设计
- 现代化的文档界面

## 快速开始

### 安装依赖

```bash
pip install --break-system-packages sphinx sphinx-intl sphinx-rtd-theme myst-parser
```

### 构建文档

```bash
make html
```

### 查看文档

打开 `build/zh_CN/html/index.html` 查看中文版，或打开 `build/en/html/index.html` 查看英文版。

## 文档结构

```text
.
├── Makefile
├── source/
│   ├── conf.py
│   ├── index.md
│   └── guide.md
└── build/
    ├── en/
    └── zh_CN/
```

## 技术栈

- **Sphinx**: 文档生成框架
- **MyST-Parser**: Markdown 解析器
- **sphinx-rtd-theme**: Read the Docs 主题
- **sphinx-intl**: 多语言支持

## 使用指南

详见[使用指南](guide.md)。

---

Copyright © 2026 MonkeyCode
