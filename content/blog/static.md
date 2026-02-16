---
title: "static关键字"
date: "2025-05-10"
description: "C语言static关键字详解 - 静态局部变量与静态全局变量"
tags: ["嵌入式八股"]
---

# static

static c语言的关键字，用于声明静态变量

## 1. 用于定义函数中的静态局部变量
```c
void func() {
    static int counter = 0;
    counter++;
    printf("%d\n", counter);
}
```
该变量的作用域仅在函数内，生命期则是伴随整个程序，仅初始化一次

## 2. 用于定义函数中的静态全局变量
```c
static int globalVar = 10;

static void helper() {
    // 只能在当前文件中使用
}
```
该变量的作用域仅在该文件内，生命期则是伴随整个程序，仅初始化一次
