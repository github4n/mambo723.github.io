---
layout:     post                        # 使用的布局(必填)
title:      Cocos引擎底层常见问题                     # 标题(必填)
subtitle:   CocosCreator 游戏开发      # 副标题(必填)
date:       2019-08-23                  # 时间(必填)
author:     Mambo723                    # 作者(必填)
gitalk_enable: true                     # 是否开启评论(必填)
---
## Cocos 引擎底层常见问题
### C++
#### 1. 指针与引用的区别
* 指针可变，引用不可变
* 指针有分配内存，引用没有，变量别名而已
* 指针可为空值，引用不可

---

#### 2. STL 中 vector、list、map 的区别和底层实现？
* vector 是连续内存，多次拷贝造成性能消耗
* list 是节点链表，插入和删除效率最高
* map 是映射表，底层红黑二叉树，查找效率最高

---

#### 3. STL 内存池的实现，池化的优点？
* 多级链表缓存，避免频繁创建和删除

---

### Network
#### 1. 多线程一般用在什么地方？
* 资源的加载或下载、网络消息收发

---

#### 2. 如何当前是断网还是弱网？
* 心跳检测

---

#### 3. 支持并发的三种方式？
* 进程、线程、IO多路复用(select poll  epoll)

---

### Cocos
#### 1. CCImage 和 CCTexture 的区别？
* CCImage 保存的是内存数据
* CCTexture 保存的是显存数据

---

#### 2. CCNode 中的 visit 和 draw 方法的区别？
* visit 渲染前准备
* draw 具体绘制

---

#### 3. 2.x和  3.x 渲染上最大的变化是什么？
* 场景树到渲染队列

---

#### 4. A-B 场景切换的步骤是什么，怎样避免内存峰值？
* - B-init   B-Enter  A-Exit  A-Clean
* - 过度场景

---

### Else
#### 1. 如何知道当前的网络类型是 wifi 还是 4G？
* 分平台实现 NetworkInfo

---

#### 2. 如何进行设备同一标识，避免重复注册？
* 利用 IMEI、MAC、UUID 生成用户标识

---

#### 3. clippingNode 的图形学原理？
* 模板缓冲
