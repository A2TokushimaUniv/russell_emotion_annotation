# russell_emotion_annotation

動画データに対してラッセルの円環モデルの感情ラベルのアノテーションを行うためのツールです。

![デモ](./assets/demo.png)

## 使い方

1. videoフォルダを作成し、アノテーション付与したい動画を入れる
2. VSCodeにLive Serverを拡張機能でダウンロードする
3. index_video.htmlをVSCode上で表示し、右クリック→Open with Live Serverを選択する
4. ユーザー名を入力する (これが出力CSVファイルの名前の最後につく)
5. 画面左上の"ファイルを選択"を押し、アノテーション付与したい動画を選択する
6. 動画が最後まで再生されると、アノテーション結果がCSVファイルとして出力される

    (出力ファイル名:動画名_ユーザ名.csv)

## 感情ラベルについて

感情ラベルはラッセルの円環モデルをもとに作成しました。

感情の強度は中心ほど弱く、外側に行くほど強いものとします。

マウスの座標を1秒ごとに取得。取得した中身は[x,y,時間]となっています。

## そのほか機能について

動画の一時停止・再生は左クリックで行えます。

ラベル付与で間違った場合などで手直ししたい場合は、一時停止をしたうえで、シークバーを戻すことによって再度ラベル付与が可能です。


## 推奨環境

Google Chrome

## 引用

このプロジェクトがあなたの研究に役立つと思われる場合は、私たちの論文を引用してください。

```
@inproceedings{
  title = {Multimodal Emotion Recognition and Dataset Construction in Online Counseling},
  author = {Toshiki Takanabe and Kotaro Kashihara and Kazuyuki Matsumoto and Keita Kiuchi and Xin Kang and Ryota Nishimura and Manabu Sasayama},
  booktitle = {The 38th Pacific Asia Conference on Language, Information and Computation},
  year = {2024}
}
```

## 謝辞

本成果物は、JSPS科研費JP20K12027、JKAおよび競輪の推進基金、国立研究開発法人新エネルギー・産業技術総合開発機構（NEDO）（JPNP20004）の支援を受けて開発されました。