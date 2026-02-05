# Sphinx 文档构建指南

本指南详细说明如何构建和部署多语言文档站点。

## 项目结构

```
docs/
├── Makefile                    # 构建命令
├── source/                     # 源文件目录
│   ├── conf.py                # Sphinx 配置文件
│   ├── index.rst              # 主文档索引
│   ├── index.md               # 主页内容 (Markdown)
│   ├── zh_CN/                 # 中文文档
│   │   └── guide.md
│   ├── en/                    # 英文文档
│   │   └── guide.md
│   ├── _static/               # 静态资源
│   └── _templates/            # 自定义模板
├── locale/                    # 翻译文件目录
└── _build/                    # 构建输出目录
    └── html/                  # HTML 输出
```

## 本地构建

### 单语言构建 (中文)

```bash
cd docs
make html
```

### 单语言构建 (英文)

```bash
cd docs
make html SPHINXOPTS="-D language=en"
```

## 多语言构建流程

### 1. 初始设置

```bash
cd docs
sphinx-intl init
```

### 2. 提取可翻译字符串

```bash
sphinx-build -b gettext source locale
```

### 3. 创建翻译模板

```bash
sphinx-intl update -p locale -l en
```

### 4. 翻译内容

编辑翻译文件:

```bash
nano locale/en/LC_MESSAGES/docs.po
```

### 5. 编译翻译

```bash
sphinx-intl build
```

### 6. 构建文档

```bash
make html
```

## 清理构建

```bash
make clean
```

## 部署

生成的 HTML 文件位于 `_build/html/` 目录，可以直接部署到任何静态网站托管服务。

- GitHub Pages
- Netlify
- Vercel
- 阿里云 OSS
