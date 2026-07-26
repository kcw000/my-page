# Kai Creative Works

言葉がまとまっていない個人・小規模事業者に向けて、ヒアリング、コピー、構成、Webデザイン、レスポンシブ実装まで担当する制作サービスの営業LPです。

- 公開URL: `https://kcw000.github.io/my-page/`
- 公開方法: GitHub Pages
- GitHub Pages source: `main` / `/ (root)`

## 制作方針

- Heroで「誰向けか」「何を頼めるか」「次に何をするか」を伝える
- 実績をHero直後に置き、説明より先に制作物と担当範囲を見せる
- 言葉、構成、デザイン、実装を同じ意図でつなぐ
- AIは情報整理や実装の補助に使い、企画、表現、修正、最終判断は人が行う
- 裏付けのない実績、数字、口コミ、受賞歴は掲載しない
- スマートフォン、キーボード操作、読みやすい見出し階層を優先する

## 現在のページ構成

1. Header
2. Hero
3. Works
4. Services
5. Process
6. Price
7. About
8. FAQ
9. Contact
10. Footer

WorksをHero直後へ配置し、`LP / WEB` と `COPY / BRAND LANGUAGE` に分けています。NENE LPを課題・対応・担当まで読める主事例として掲載し、LILTとかくれ本は実在企業から受注した案件ではないため、画面上で `自主制作｜サンプルLP` と明示しています。

コピー実績は、河村醤油の公開中実案件、第61回宣伝会議賞のGENDA GiGO Entertainment協賛企業賞、Moominの受賞・広告採用実績を、担当範囲が誤解されない形で掲載しています。河村醤油とGiGOには公開ページの該当部分をキャプチャした証拠画像を添えています。GiGOの映像制作は本人の担当ではないため、株式会社Vook制作であることを明記しています。

Heroのメインコピーは「伝えたい想いを、伝わる言葉とデザインに。」です。「眠っている価値を書き起こし、問い合わせにつながるWebページへ。」は補足コピーとして表示し、Webに詳しくない閲覧者へ最初から専門用語だけを提示しない構成にしています。

Hero背景には `visual/hero/hero-motion.mp4` を使用しています。動画はミュート・自動再生・ループ・インライン再生とし、`visual/hero-main.jpg` をposter兼フォールバックとして維持しています。OSやブラウザで「視差効果を減らす」「動きを減らす」が有効な場合は静止画を表示します。

Servicesは、コピーライティング、LP・Webページ制作、発信設計・実績整理を区別できる専用画像で表示します。画像は `visual/services/` に保存し、カード内では3:2の比率を維持します。差し替える場合は同じファイル名と比率を推奨します。Processはローカル線画アイコンと、PC・スマホで方向が変わる矢印で順序を示します。Hero、Services、Process、Contactと内容が重複していた「相談できる状態・依頼する理由」セクションは削除しています。

Aboutはスマホで経歴が長く続かないよう、経歴ハイライトを3期に整理しています。講座修了や業務経験など、依頼判断に必要な信頼情報は各期の説明に残しています。

コピー・ブランド言語設計は、掲載許可または公開情報を確認できた実績だけ企業名・受賞区分を掲載しています。担当範囲を越えて、Webサイト全体や映像自体を制作したと誤解される表現は使用しないでください。

## 使用技術

- HTML
- CSS
- JavaScript

ビルド環境、CMS、外部ライブラリ、CDNは使用していません。別PCや納品先でも動く相対パスで参照しています。

## ファイル構成

```text
.
├── .gitignore
├── AGENTS.md
├── README.md
├── index.html
├── privacy.html
├── script.js
├── style.css
├── photo/
│   └── profile.jpg
└── visual/
    ├── hero/
    │   └── hero-motion.mp4
    ├── icons/
    │   ├── LICENSE.txt
    │   ├── clipboard-check.svg
    │   ├── message-circle.svg
    │   ├── monitor-check.svg
    │   └── panels-top-left.svg
    ├── services/
    │   ├── content-planning.png
    │   ├── copywriting.png
    │   └── lp-web.png
    ├── works/
    │   ├── copy/
    │   │   ├── gigo-award.jpg
    │   │   ├── kawamura-page.jpg
    │   │   ├── moomin-poster.jpg
    │   │   └── moomin-signage.jpg
    │   ├── kakurebon-lp.png
    │   ├── lilt-lp.jpg
    │   ├── nene-cover-source.png
    │   └── nene-cover.jpg
    ├── hero-main.jpg
    ├── ogp.jpg
    └── visual_02.png
```

## 使用画像・動画

- `visual/hero/hero-motion.mp4`: Hero背景動画。ミュート・自動再生・ループ・インライン再生で使用
- `visual/hero-main.jpg`: Hero動画のposter兼フォールバック画像
- `visual/ogp.jpg`: 1200 × 630pxのOGP / Twitter Card画像。最新のHeroコピー、対応領域、プロフィール写真を使ったリンク共有用ビジュアル
- `photo/profile.jpg`: Aboutのプロフィール写真
- `visual/works/nene-cover.jpg`: WorksのNENE代表事例に表示する軽量カバー画像
- `visual/works/nene-cover-source.png`: 採用したNENEカバー画像の原本
- `visual/works/lilt-lp.jpg`: LILT Dance & Conditioningの公開画面
- `visual/works/kakurebon-lp.png`: かくれ本LPの公開画面
- `visual/works/copy/kawamura-page.jpg`: 河村醤油の公開ページにコピーが掲載されていることを示す画面キャプチャ
- `visual/works/copy/gigo-award.jpg`: 宣伝会議賞公式ページの協賛企業賞・作品・受賞者を示す画面キャプチャ
- `visual/works/copy/moomin-signage.jpg`: 同作品のデジタルサイネージ掲出写真
- `visual/works/copy/moomin-poster.jpg`: 同作品のポスター掲出写真
- `visual/visual_02.png`: faviconとして使用する画像
- `visual/services/*.png`: Servicesの3項目を区別するWeb向け画像
- `visual/icons/*.svg`: Processで使用する4点のLucide線画アイコン

Hero動画やWorks画像を差し替える場合は、HTMLの参照先を変えず、同名ファイルを適切な寸法・容量で置き換えると管理しやすくなります。Hero動画はMP4形式を使用し、音声を前提にしない内容にしてください。人物や制作画面を確認できない場合は、推測した代替素材を作らず、公開前に素材を確認してください。

NENEのカバーは、候補画像のうち顔全体が見え、PC・スマホ双方のトリミングに耐えやすい画像を採用しています。表示には軽量版を使い、選定の根拠を後から確認できるよう原本も保存しています。

Moomin実績は、実際の掲出が分かるサイネージ画像とポスター画像の2点に絞っています。元画像はiCloud側に残し、サイトでは `visual/works/copy/` 内のWeb向け軽量版を使用します。

河村醤油とGiGOの画面キャプチャは、実績の根拠が分かる部分だけを使用しています。掲載内容や公開ページのデザインが変わった場合は、リンク先とキャプチャの整合を確認してください。

Aboutのプロフィール写真を差し替える場合は、`photo/profile.jpg` を同名で置き換えます。表示枠は4:5で、人物の顔と上半身が中央に収まる縦位置の写真を推奨します。HTMLの `width` / `height` とaltも、実画像に合わせて確認してください。

`visual/icons/*.svg` はLucide 1.8.0（ISC License）です。ライセンス本文は `visual/icons/LICENSE.txt` に保存しています。線画以外の立体アイコン、発光、過度なグラデーションを混在させないでください。

## 実績URL

- NENE LP: `https://kcw000.github.io/nene-lp/`
- LILT Dance & Conditioning: `https://lilt-dance-conditioning.ka1note.chatgpt.site`
- かくれ本: `https://kakurebon-campaign.ka1note.chatgpt.site`
- 河村醤油「河村醤油について」: `https://www.kawamura-shoyu.co.jp/?mode=f1`
- 第61回 宣伝会議賞: `https://awardg.sendenkaigi.com/senden/history/61`
- AdverTimes「池袋『GiGO総本店』1周年 『宣伝会議賞』の受賞作を活用」: `https://www.advertimes.com/20240920/article474510/`

外部リンクには `target="_blank" rel="noopener noreferrer"` を設定しています。

## サービスと料金

### 単品メニュー

- キャッチコピー作成（10案 / 修正1回）: `20,000円`
- ボディコピー作成: `30,000円`
- MVV作成: `30,000円`
- LP / HPライティング: `30,000円`

### セット

- キャッチコピー＋ボディコピー作成: `50,000円`
- 1ページLP作成: `80,000円`

1ページLPには、ヒアリング、構成設計、コピーライティング、Webデザイン、レスポンシブ実装を含みます。

フォーム実装、画像・文章素材の準備範囲、修正回数、公開作業、納期、サーバー・ドメイン費、税区分は固定条件として断定せず、要件確認後に見積書で明示します。

ServicesとPriceの「この内容で相談する」を押すと、Contactの `希望するサービス` に該当項目が自動選択されます。`LP・Webページ制作` を選んだ場合は、予算欄の下に基本料金80,000円の補足が表示されます。

## Contact

ContactフォームはFormspreeへ接続しています。

- フォーム名: `Kai Creative Works Contact`
- Formspree endpoint: `https://formspree.io/f/xgojnoyp`
- method: `POST`
- メール欄: `name="email"`
- 件名: `_subject`
- honeypot: `_gotcha`
- 参考URL: `reference_url`
- 結果通知: `role="status"` / `aria-live="polite"`

送信中はボタンを無効化し、二重送信を防止します。成功後はフォームをリセットし、失敗時は入力内容を保持します。通知先メールはHTMLではなくFormspree管理画面側で設定しています。

### Formspree通知先の変更

1. Formspreeへログイン
2. `Kai Creative Works Contact` を開く
3. SettingsまたはNotificationsを開く
4. 通知先メールを変更して認証する

### テスト送信

1. 公開URLのContactを開く
2. 必須項目未入力、メール形式、同意未選択のエラーを確認
3. テスト用の有効な内容で1件送信
4. 成功メッセージとフォームリセットを確認
5. FormspreeのSubmissionsと通知先メールを確認
6. Reply-Toが入力者メールになっているか確認
7. 迷惑メールフォルダも確認

実送信は通知を発生させるため、公開後に管理者が行ってください。

## プライバシーポリシー

- 本文: `privacy.html`
- FooterとContact同意文からリンク
- Formspreeを通じて情報が送信・保存・通知される場合があることを明記
- 機密情報・個人情報を事前確認なく外部AIサービスへ入力しない方針を明記
- 問い合わせ情報を現在行っていない広範な「サービス改善」に利用する表現は掲載しない

プライバシーポリシー本文の大意やFormspree endpointを変更する場合は、公開前に運用との一致を再確認してください。

## ローカル確認

```bash
cd path/to/my-page
python3 -m http.server 8000
```

`http://localhost:8000/` と `http://localhost:8000/privacy.html` を開きます。8000番が使用中の場合は別ポートを指定してください。

### 重点確認幅

- 1440px
- 1024px
- 768px
- 430px
- 390px
- 360px
- 320px

### 公開前チェック

- Hero画像、コピー、2つのCTAが自然に表示される
- WorksのLP / Web 3件とコピー実績の外部リンク・制作区分・担当範囲が正しい
- 河村醤油とGiGOの証拠画像、Moominのサイネージ・ポスター画像が用途どおりに表示される
- Aboutのプロフィール、コピーライティング歴5年以上、養成講座修了を含む経歴、進め方がPC・スマホで読みやすい
- サービスCTAがフォームへ反映される
- FAQの各項目が独立して開閉する
- スマホメニューが開閉し、Escapeで閉じられる
- Contactの必須・形式・同意チェックが機能する
- `privacy.html` へ移動しトップへ戻れる
- 320pxを含め横スクロールがない
- コンソールエラーがない
- `canonical`、`og:url`、`og:image`、Twitter Card画像が公開URLと一致する
- `ProfessionalService` と `FAQPage` のJSON-LDが画面内容と一致する

## 更新時の注意

- 作業前に `AGENTS.md` を確認する
- `AGENTS.md`、Formspree endpoint、公開URLを意図なく変更しない
- 事実確認できない実績や掲載区分を推測で補わない
- 画像、リンク、フォーム名、構造化データの整合を保つ
- デザイン変更後はPCだけでなく360px以下も確認する
- GitHub Pages反映後に公開URLでCSS、画像、JavaScript、フォーム直前までの動作を再確認する
