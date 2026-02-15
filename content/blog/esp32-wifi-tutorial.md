---
title: "ESP32 WiFi模块入门教程"
date: "2025-01-20"
description: "ESP32是一款性价比极高的WiFi+蓝牙双模芯片，本文介绍其基本使用方法和示例代码。"
tags: ["ESP32", "WiFi", "物联网"]
---

# ESP32 WiFi模块入门教程

ESP32是乐鑫科技推出的一款功能强大的WiFi+蓝牙双模芯片。

## 主要特性

- 双核240MHz处理器
- WiFi 802.11 b/g/n
- 蓝牙4.2/BLE
- 丰富的外设接口

## Hello World

```c
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("SSID", "PASSWORD");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("Connected!");
}

void loop() {
}
```

## 总结

ESP32非常适合物联网项目的开发，社区资源丰富，上手容易。
