---
title: Webデザイナーの為の「本当は怖くない」“黒い画面”入門 Part.05
author: komagata
date: 2010-12-19T10:36:06+00:00
---

今回は“黒い画面”で使える便利コマンドを紹介していきます。

## ネットから簡単ダウンロード&#8221;cURL&#8221;

ネットからファイルを簡単にダウンロードできるcurl(シーユーアールエル)というコマンドがあります。&#8221;Client for URLs&#8221;の略だそうです。

````bash
$ curl http://example.com
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
  <META http-equiv="Content-Type" content="text/html; charset=utf-8">
  <TITLE>Example Web Page</TITLE>
</HEAD>
<body>
<p>You have reached this web page by typing "example.com",
"example.net","example.org"
  or "example.edu" into your web browser.</p>
<p>These domain names are reserved for use in documentation and are not available
  for registration. See <a href="http://www.rfc-editor.org/rfc/rfc2606.txt">RFC
  2606</a>, Section 3.</p>
</BODY>
</HTML>
````

curlは引数にURLを指定するとネットから取ってきて表示してくれます。ブラウザからhttp://example.comにアクセスしてソースを表示したときと同じものが表示されているはずです。

````bash
$ curl http://example.com -o foo.html
````

<a href="http://www.flickr.com/photos/komagata/5273561768/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5248/5273561768_1a3a31482f.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>

curlは-oオプションにファイル名を渡すと内容をそのファイル名で保存してくれます。他のソフトをインストールするときも、curlでこうやってダウンロードしてくると楽ですね。

## とにかく開くコマンド&#8221;open&#8221;

openはその名の通り開くコマンドです。

````bash
$ open スタックについて.pdf
$ open http://www.facebook.com
$ open .
````

普通のファイルはMacで関連付けられてるソフトで開きます。URLは標準のブラウザで開きます。最後のはよく使うんですが、今いるディレクトリをFinderで開きます。.(ドット)は今いるディレクトリの意味でしたよね。

## ニコニコ動画でお馴染みのあの声&#8221;SayKana&#8221;

あの声を使えるSayKanaというフリーソフトがあります。下記のページからダウンロード・インストールしてください。

[SayKana &#8211; Mac用音声合成プログラム][2]

/usr/local/bin/saykanaというコマンドがインストールされます。以前PATHを確認しましたが、/usr/local/binもPATHに最初から含まれているのでディレクトリ名は省略して実行できます。

````bash
$ saykana くろいがめんわこわくないよ
````

saykanaは引数にひらがな・カタカナを指定すると日本語音声で読み上げてくれる音声合成ソフトです。

````bash
$ saykana -s 70 ゆっくりよみあげることもできるよ
````

-sオプションで読み上げるスピードを調節することができます。(100がデフォルト)

````bash
$ saykana -s 70 くろいがめんわこわくないよ -o dont-be-afraid.aiff
````

-oオプションでAIFF(音声ファイル)として保存できます。-hでヘルプが表示されるので他にも色々試してみましょう。

<div class="tips">

#### saykanaの元ネタ

Macにはsayという英語の音声合成ソフトも入っています。saykanaはそれを意識して作られています。

````bash
$ say holy cow
````
</div>