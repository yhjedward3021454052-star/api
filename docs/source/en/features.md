# Feature Showcase

This page demonstrates all the features available in this documentation site.

## Code Blocks

### Python Code

```python
def hello_world():
    """A simple hello world function."""
    print("Hello, World!")
    return True

if __name__ == "__main__":
    result = hello_world()
    print(f"Result: {result}")
```

### JavaScript Code

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return true;
}

// Call the function
greet("World");
```

### Bash Commands

```bash
# Install dependencies
pip install sphinx myst-parser

# Build documentation
make html

# Serve locally
python -m http.server 8000
```

### File Tree Structure

```text
project/
├── docs/
│   ├── source/
│   │   ├── conf.py
│   │   ├── index.rst
│   │   ├── en/
│   │   │   ├── index.md
│   │   │   └── guide.md
│   │   └── zh_CN/
│   │       ├── index.md
│   │       └── guide.md
│   ├── build/
│   └── Makefile
└── README.md
```

## Admonitions

:::{note}
This is a note admonition. Use it to highlight important information that readers should be aware of.
:::

:::{tip}
This is a tip admonition. Use it to share helpful advice or best practices.
:::

:::{warning}
This is a warning admonition. Use it to alert readers about potential issues or pitfalls.
:::

:::{danger}
This is a danger admonition. Use it for critical warnings that could cause serious problems.
:::

## Tables

### Basic Table

| Feature | Status | Description |
|---------|--------|-------------|
| Markdown | ✅ | Full MyST-Parser support |
| Code Highlighting | ✅ | Syntax highlighting for multiple languages |
| Theme Switcher | ✅ | Dark/Light mode toggle |
| Language Switcher | ✅ | EN/中文 switching |
| Search | ✅ | Built-in search functionality |
| Responsive | ✅ | Mobile-friendly design |

### Alignment Table

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| A | B | C |
| 1 | 2 | 3 |

## Inline Code

You can use inline code like `print("hello")` within paragraphs. This is useful for referencing functions like `hello_world()` or variables like `result`.

## Lists

### Unordered List

- First item
- Second item
  - Nested item 1
  - Nested item 2
    - Deep nested item
- Third item

### Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step
4. Fourth step

### Task List

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Another pending task

## Blockquotes

> This is a blockquote. It can contain multiple lines of text.
> 
> Blockquotes are useful for highlighting quotes or important passages from other sources.

> **Note**: You can also combine blockquotes with other formatting like **bold** and *italic*.

## Links

- External link: [Sphinx Documentation](https://www.sphinx-doc.org/)
- Internal link: [Back to Index](index.md)
- Reference link: [User Guide](guide.md)

## Text Formatting

- **Bold text**
- *Italic text*
- ***Bold and italic***
- ~~Strikethrough~~
- `Inline code`
- [Link](https://example.com)

## Headings Hierarchy

### Level 3 Heading
#### Level 4 Heading
##### Level 5 Heading
###### Level 6 Heading

## Horizontal Rule

Text before horizontal rule.

---

Text after horizontal rule.

## Math (Optional)

Inline math: $E = mc^2$

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Images

Images can be added using Markdown syntax:

![Alt text](https://via.placeholder.com/800x400?text=Documentation+Image)

## Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

Term 3
: Definition for term 3

## Summary

This page demonstrates all the major features available in this Sphinx documentation site. Use these examples as templates for your own documentation.
