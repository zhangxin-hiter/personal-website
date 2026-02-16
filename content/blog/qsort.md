---
title: "qsort函数"
date: "2025-05-06"
description: "C语言标准库qsort函数的使用方法与示例"
tags: ["hot100"]
---

# qsort函数

函数原型
`void qsort(int *base, size_t num, size_t size, int (*campar)(const void *, const void *))`
是标准库stdio.h中的函数，用于快速排序

使用示例
```c
//qsort的参数函数
int cmp(const void *a, const void *b)
{
    return *(int *)a - *(int *)b;
}
int main()
{
    int *array = (int *)malloc(sizeof(int) * num);
    qsort(array, num, sizeof(int), cmp);
}
```
排序有时可以用于消除重复元素
