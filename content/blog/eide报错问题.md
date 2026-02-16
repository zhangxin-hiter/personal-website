---
title: "EIDE报错问题"
date: "2025-05-28"
description: "EIDE STM32开发环境报错解决方案 - 芯片支持包问题"
tags: ["eide"]
---

# EIDE报错问题

本人因为事忙有一段时间没有使用eide写stm32，今天打开用了一下发现之前编译过的文件现在编译不过了，提示**Please select first the target STM32F10x device used**，以及使用的一个中断宏未定义。

在**stm32f103.h**文件中发现确实相关宏定义缺失

## 解决方案

将之前导入的芯片支持包删去，这可能是eide的一个bug，需要重新导入你使用的芯片型号的支持包
