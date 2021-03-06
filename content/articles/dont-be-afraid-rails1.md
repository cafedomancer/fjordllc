---
title: 本当は怖くない Ruby on Rails Part.1
author: komagata
date: 2018-02-01T00:01:07+09:00
url: /articles/dont-be-afraid-rails1.html
draft: false
categories:
  - blog
tags:
  - dont-be-afraid-rails
---
## フレームワークとは？
{{% teacher face="piyorudo5" %}}
これからRuby on Rails（ルビーオンレイルズ）を入門していきましょう。

このシリーズは覚えることがあって大変なイメージのRailsの入り口と全体像を掴んでもらうことで苦手意識をなくしてもらって、

「Railsって便利！」

「Railsって面白い！」

と思ってもらえるようになるのが目標です。

Ruby on Railsは知っていますか？
{{% /teacher %}}
{{% student %}}
一応これまでRubyを勉強してきたので、もちろんしってますよ！あれでしょ？レールズでしょ？レールズ。

この業界、レールズやってなきゃモグリとはよく言ったもので・・・。
{{% /student %}}
{{% teacher face="piyorudo14" %}}
名前の響きしか知らないことがよくわかりました。
{{% /teacher %}}
{{% teacher %}}
Ruby on Rails（以降Rails）はオープンソースのフルスタックのWebアプリケーションフレームワークです。

{{% /teacher %}}
{{% student face="girl7" %}}
オープンソースはわかりますけど、フルスタック？フレームワーク？
{{% /student %}}
{{% teacher %}}
フルスタック(full-stack)とはデータベースへのアクセスやメール送信など、Webアプリケーションを作る機能が全部そろっているという意味です。その辺の機能が無い、Webページを表示したりするだけのフレームワークもありますよ。
{{% /teacher %}}
{{% student %}}
今まで使った[rake](https://github.com/ruby/rake)なんかはライブラリって呼びましたよね？フレームワークっていうのはどう違うんですか？
{{% /student %}}
{{% teacher face="piyorudo8" %}}
ライブラリとフレームワークの違いはこんな感じのイメージです。

![ss1](https://i.gyazo.com/004d0fc4918c83e011ac2db4c80c8f00.png)
{{% /teacher %}}
{{% student face="girl8" %}}
なるほど。ライブラリは部品で、フレームワークは枠なんですね。
{{% /student %}}
{{% teacher %}}
このイメージでもわかるように、ライブラリを使うよりもフレームワークを使ったほうが一般的には自分で書くコードの量は減ります。
{{% /teacher %}}
{{% student face="girl5" %}}
フレームワークの方が楽でお得なわけですね。だからみんなレールズ、レールズ言うのか〜。
{{% /student %}}
## インストール
{{% teacher %}}
さっそくRailsをインストールしてWebアプリを作ってみましょう。

rbenvで最新のrubyは入っていますね？
{{% /teacher %}}
{{% student face="girl11" %}}
アールビー・・・エンブ・・・？
{{% /student %}}
{{% teacher face="piyorudo19" %}}
・・・。
{{% /teacher %}}
{{% student %}}
先生、顔！顔！

嘘ですよ〜。Rubyをやる前の講義でならった、複数バージョンのrubyを簡単にインストールできるrbenvですよね。最新のrubyも入ってます。
```bash
$ ruby -v
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin16]
```
{{% /student %}}
{{% teacher face="piyorudo17" %}}
良いですね。ではgemコマンドでrailsをインストールしましょう。
```bash
$ gem install rails
（長い表示がずらずら）
Successfully installed rails-5.1.4
35 gems installed
```
これでインストールできました。以後railsコマンドが使えるようになります。
{{% /teacher %}}
{{% student %}}
すっごいずらずらと何かインストールされましたが簡単ですね！

ここのgemコマンドはrubygemsのところで習ったライブラリをインストールしてくれるコマンドですよね？
{{% /student %}}
{{% teacher face="piyorudo8" %}}
そうです。railsも1つのgemなのでこうやって簡単にインストールできます。

実際にはrailsを構成するたくさんのgemが集まってできています。

railsを構成する主なgemはこれらです。

- Active Record（アクティブレコード）
データベースとのやり取り。
- Active Support（アクティブサポート）
Ruby自体を便利に拡張。
- Action View（アクションビュー）
HTMLテンプレートなど。
- Action Mailer（アクションメーラー）
メール作成・送信など。
{{% /teacher %}}
## Webアプリを作ろう
{{% teacher %}}
hello_railsというアプリを作ってみましょう。`rails new`コマンドで雛形のディレクトリを作成します。
```bash
$ rails new hello_rails
（色々表示がずらずら）
      create  package.json
      remove  config/initializers/cors.rb
      remove  config/initializers/new_framework_defaults_5_1.rb
```
{{% /teacher %}}
{{% student %}}
hello_railsというディレクトリができて、その中にも色々ファイルができてます！
![ss](https://i.gyazo.com/58f15d6d2449748c3c187c021037baf6.png)
あ、このGemfileっていうのは[bundler](http://bundler.io/)の時に習った必要なgemが書いてあるファイルですよね？
{{% /student %}}
{{% teacher face="piyorudo17" %}}
その通りです。よくわかりましたね。それではGemfileの中身を見てみましょう。
```ruby
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
```
{{% /teacher %}}
{{% student face="girl3" %}}
うわぁ、すごいいっぱい書いてある・・・（そっと閉じる・・・）
{{% /student %}}
{{% teacher %}}
まあ最初はそれぞれが何のライブラリなのかわからなくても仕方ありません。のちのち覚えていきましょう。

今はrailsのバージョン5.1.4が使われているということがわかればよいです。
Gemfileには手を加えず、`bundler install`してみましょう。
{{% /teacher %}}
{{% student %}}
Gemfileと同じディレクトリに移動してからやるんでしたよね。
```bash
$ cd hello_rails
$ bundle install
（色々表示ずらずら）
Bundle complete! 16 Gemfile dependencies, 70 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```
またずらずらでましたが成功したみたいです。
{{% /student %}}
{{% teacher face="piyorudo17" %}}
いいですね。
{{% /teacher %}}
{{% student face="girl7" %}}
ちょっと気になったんですけど・・・
`gem install`とか`bundle install`ってしてたくさんライブラリがインストールされたみたいですが、私のMacの一体どこにそんなにたくさんのgemがあるんですか？
{{% /student %}}
{{% teacher face="piyorudo12" %}}
良い質問ですね。
`bundle show gem名`というコマンドで、そのgemがインストールされているパスを知ることができますよ。
```bash
$ bundle show rails
/usr/local/var/rbenv/versions/2.5.0/lib/ruby/gems/2.5.0/gems/rails-5.1.4
```
{{% /teacher %}}
{{% student face="girl4" %}}
わっ、ホントだ。1つのコマンドを打っただけなのにこんなにたくさんダウンロードしていたんですね。
![ss2](https://i.gyazo.com/52fc8c9bbdc676fa535184df9eb2fe40.png)
{{% /student %}}
## はじめてのアプリの立ち上げ
{{% teacher %}}
それではまだ何も独自のコードは書いていませんが、このWebアプリを立ち上げてみましょう。
`rails server`というコマンドを使います。

```bash
$ rails server
=> Booting Puma
=> Rails 5.1.4 application starting in development
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.11.2 (ruby 2.5.0-p0), codename: Love Song
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://0.0.0.0:3000
Use Ctrl-C to stop
```
{{% /teacher %}}
{{% student %}}
あ、なんか表示されて止まりました。
{{% /student %}}
{{% teacher %}}
それが正常な状態です。Webアプリは訪問者がブラウザでアクセスしてくるのを待ち続けるアプリなので終了はせず、立ち上がりっぱなしです。

Safariなどのブラウザーで`http://localhost:3000`にアクセスしてみてください。
![https://gyazo.com/ce19af50c754043c2dda018a36d87054](https://i.gyazo.com/ce19af50c754043c2dda018a36d87054.jpg)
{{% /teacher %}}
{{% student face="girl5" %}}
あ、やった。かわいい絵がでました。成功ですね？
{{% /student %}}
{{% teacher face="piyorudo17" %}}
はい、成功です。

localhostというのは自分のMacのことです。HTTPプロトコルとポート番号についてはもう習いましたよね？

`http://localhost:3000`は自分のMacの3000番ポートにHTTPでアクセスするという意味です。railsではアプリを3000番ポートで立ち上げてくれるのでこうやってアクセスできるというわけです。
{{% /teacher %}}
{{% student face="girl3" %}}
は、はい。（HTTPプロトコルを復習しなきゃ・・・）
{{% /student %}}
{{% teacher %}}
今回はインストールとアプリ立ち上げまでをやりました。次回は独自の内容を表示してみましょう。
{{% /teacher %}}
{{% student %}}
はーい。
{{% /student %}}

{{% topic %}}
## 前提となる技術とカリキュラム

リンク先はFjord Boot Camp内のカリキュラムになっています。

- rbenv
  - [rbenvでRubyをインストール](https://bootcamp.fjord.jp/practices/24)
- ruby
  - [Rubyの基本](https://bootcamp.fjord.jp/practices/26)
- rubygems
  - [rubygemsの基本](https://bootcamp.fjord.jp/practices/29)
- bundler
  - [Bundler入門](https://bootcamp.fjord.jp/practices/141)
- httpプロトコル
  - [HTTPの基本](https://bootcamp.fjord.jp/practices/15)
{{% /topic %}}

{{< bootcamp >}}
