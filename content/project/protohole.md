+++
# Date this page was created.
date = "2018-01-01"

# Project title.
title = "ProtoHole"

# Project summary to display on homepage.
summary = " Prototyping Interactive 3D Printed Objects Using Holes and Acoustic Sensing."

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "protohole.png"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = []

# Optional external URL for project (replaces project detail page).
external_link = ""

# Does the project detail page use math formatting?
math = false

# Optional featured image (relative to `static/img/` folder).
[header]
image = "protohole.png"
caption = "My caption :smile:"

+++

### Abstruct
A prototype process of a physical user interface includes not only connection of electronic parts and an enclosure design, but also the arrangement and configuration of the electronic parts in the enclosure. This process is complicated and difficult for people who do not have modeling skills. We propose ProtoHole, a technique for adding interactivity to 3D printed objects by creating holes in the surface. By emitting a high-frequency sweep signal inside the object, and classifying changes in resonance properties when closing holes using machine learning algorithms, an object can be easily made interactive. By designing an arrangement of holes on the surface of the object and using a swept-frequency acoustic sensing, it is possible to create prototype of interactive objects and physical user interfaces without considering an arrangement of internal electronic parts and wiring. In this paper, we propose an interaction method and its applications.

本研究では，３Dプリントするオブジェクトの表面に穴をあけることによってオブジェクトをインタラクティブにする手法 ProtoHoleを提案する．物理的なユーザーインターフェイスのプロトタイプ製作の需要が高まっている．しかし，そのプロセスには，電子部品同士の接続と筐体デザインだけでなく，筐体への電子部品の配置，構成の設計も含まれる．この設計は，モデリングの技術やノウハウのない者には複雑で難しい．ProtoHoleは，3Dプリントするオブジェクトの表面に穴を開けることで，複雑な形状のオブジェクトをインタラクティブにする．穴の塞ぎ方をデザインし，スイープ信号を用いたアクティブ音響センシングを利用することで， 電子工作のいらないインタラクティブなオブジェクトの製作が可能になる．本稿では，提案手法によって実現可能なインタラクションを提示し，その作例を挙げ，考察する．