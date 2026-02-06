# 使用指南

本文档将指导您如何使用和维护这个多语言文档站点。

## 添加新文档

### 中文文档

1. 在 `zh_CN/source/` 目录下创建新的 Markdown 文件
2. 在 `index.md` 或其他页面中添加链接

### 英文文档

1. 在 `en/source/` 目录下创建新的 Markdown 文件
2. 文件名和结构与中文版本保持一致

## 构建多语言文档

### 构建英文版本

```bash
cd en
make html
```

### 构建中文版本

```bash
cd zh_CN
make html
```

### 构建所有版本

```bash
make all
```

## 主题配置

主题配置在 `source/conf.py` 文件中：

```python
html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'prev_next_buttons_location': 'both',
}
```

## 扩展功能

### 代码高亮

```python
print("Hello, World!")
```

### 表格支持

| 功能 | 说明 |
|------|------|
| Markdown | 使用 MyST-Parser 支持 |
| 多语言 | 支持多语言构建 |
| 主题 | sphinx-rtd-theme |

### 警告框

:::{note}
这是一个提示信息
:::

:::{warning}
这是一个警告信息
:::

:::{tip}
这是一个技巧信息
:::
