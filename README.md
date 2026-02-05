# Sphinx 多语言文档站点

这是一个使用 Sphinx 构建的、支持多语言的 Markdown 文档站点示例。

## 功能特点

- 多语言支持 (中文 / English)
- 使用 Markdown 编写文档
- 现代化的 sphinx-rtd-theme 主题
- 响应式设计
- 代码高亮
- 内置搜索功能

## 快速开始

### 环境要求

- Python 3.8+
- pip

### 安装依赖

```bash
pip install --break-system-packages sphinx sphinx-intl sphinx-rtd-theme myst-parser
```

### 构建文档

```bash
cd docs
make html
```

### 查看文档

在浏览器中打开 `docs/build/html/index.html` 文件。

## 项目结构

```
.
├── docs/
│   ├── Makefile              # 构建脚本
│   ├── BUILD.md              # 构建指南
│   ├── source/               # 文档源文件
│   │   ├── conf.py          # Sphinx 配置
│   │   ├── index.rst        # 主索引文件
│   │   ├── index.md         # 首页内容
│   │   ├── zh_CN/           # 中文文档目录
│   │   │   └── guide.md
│   │   ├── en/              # 英文文档目录
│   │   │   └── guide.md
│   │   ├── _static/         # 静态资源
│   │   └── _templates/      # 自定义模板
│   ├── locale/              # 翻译文件
│   └── build/               # 构建输出
│       └── html/            # HTML 文件
└── README.md                # 本文件
```

## 添加新文档

### 添加中文文档

在 `docs/source/zh_CN/` 目录下创建新的 Markdown 文件，然后在 `index.rst` 的 toctree 中引用。

### 添加英文文档

在 `docs/source/en/` 目录下创建新的 Markdown 文件，确保文件名与中文版本对应。

## 多语言支持

### 生成翻译模板

```bash
cd docs
sphinx-build -b gettext source locale
sphinx-intl update -p locale -l en
```

### 翻译内容

编辑 `locale/en/LC_MESSAGES/docs.po` 文件进行翻译。

### 构建翻译后的文档

```bash
sphinx-intl build
make html
```

## 主题定制

主题配置在 `docs/source/conf.py` 文件中，可以自定义：

- 颜色方案
- 导航栏
- 搜索功能
- 版本显示

## 部署

生成的 HTML 文件位于 `docs/build/html/` 目录，可以部署到:

- GitHub Pages
- GitLab Pages
- Netlify
- Vercel
- 或任何静态网站托管服务

## 技术栈

- **Sphinx**: 文档生成框架
- **MyST-Parser**: Markdown 解析器
- **sphinx-rtd-theme**: Read the Docs 主题
- **sphinx-intl**: 多语言支持扩展

## 资源链接

- [Sphinx 官方文档](https://www.sphinx-doc.org/)
- [MyST-Parser 文档](https://myst-parser.readthedocs.io/)
- [sphinx-rtd-theme 文档](https://sphinx-rtd-theme.readthedocs.io/)

## 许可证

Copyright © 2026 MonkeyCode
