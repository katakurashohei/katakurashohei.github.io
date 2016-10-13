---
layout: post
title: Intel Edisonの初め方のメモ
---

Intel Edisonを初めたが、Raspberry Piと少し勝手が違って面倒なのでメモ。

## 初め方
最初に始めるにはスイッチサイエンスのまとめが良い。
- [Intel Edison - Switch Science](http://trac.switch-science.com/wiki/IntelEdison)

ちなみにEdisonのやめ方は　```root@edison:~# shutdown -h now```

## 制御方法
GPIO、PWMなどを制御するには[mraa](https://github.com/intel-iot-devkit/mraa)、[upm](https://github.com/intel-iot-devkit/upm)というライブラリを使う。これを使えばRaspberry PiのときのようにEdison開発ができる。
node.js、Pythonで制御できるので便利。

Arduino互換ボードを使えばArduino UNOのように扱うことができるので、Arduino IDEが使える。
Arduinoの公式が一番わかりやすい。
- [Getting Started with Intel® Edison](https://www.arduino.cc/en/Guide/IntelEdison)

## ファイル共有
個人的には、EdisonにログインしてVimで書くのは嫌。Intelが出している開発環境もあるが、
あんま使いたくないのでファイル共有して好きなエディタで書きたい。Raspberry Piではsambaをインストールして使えたが、Edisonでも使えるようだが、少し面倒そう。

そこで **sshfs** というのを使うと便利っぽい。しかしちょっとターミナルが遅くなる気がしないでもない。
- [Edisonをsshfsでマウントする](http://shokai.org/blog/archives/10042)
- [Macでsshfsを使ってローカルからリモートのファイルを触る](http://qiita.com/ysk24ok/items/bb148530a55a4e55d99b)

## Edisonのピン
from [Pin](http://lelect.blogspot.jp/2015/05/intel-edison-breakout-board-pinout.html)
