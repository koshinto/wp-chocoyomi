# *ちょこヨミ用のテーマ*

</br>

## 開発の始め方 (Macintosh)  

</br>

## 1. [Homebrew](https://brew.sh/index_ja)をインストールする
  
```shell
bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"  
```

</br>

## 2. [Node.js](https://nodejs.org/en/download/package-manager/#macos)をインストール

```shell
brew install node
```

</br>

## 3. [Yarn](https://yarnpkg.com)をインストールする(オプション：npmで代用可能)

```shell
npm install -g yarn
```

</br>

## 4. パッケージをインストールする

```shell
yarn
```

</br>

## 5. [Docker](https://www.docker.com/)をインストールする

```shell
brew install docker
```

</br>

## 6. コンパイルする

```shell
yarn run dev
```

</br>

## 7. ビルドする

```shell
yarn run build
```

publicフォルダに公開用のファイルが生成されます。
