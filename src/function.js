    // 1回目のお題抽選開始の関数
    // ルーレット表示するため、80ミリ秒ごとにお題を切り替えて表示
    function startLottery(allThemes, displayTheme) {
      interval = setInterval(() => {
          // ランダムな数値を生成
          randomIndex = Math.floor(Math.random() * allThemes.length);
          // ランダムな数値を用いて、お題配列からお題を抽出し画面に表示
          displayTheme.textContent = allThemes[randomIndex];
      }, 80);
  }

  // 1回目のお題抽選停止の関数
  function stopLottery(allThemes, displayTheme) {
      // ランダム表示を停止
      clearInterval(interval);    
      // 一度使用したお題を表示させないためにお題配列の中から削除
      allThemes.splice(randomIndex, 1);
      // 一度使用したお題を２回目抽選用配列に格納
      selectedThemes.push(displayTheme.textContent);
  }

  const people_shuffle_button = document.getElementById('people_shuffle_button');
  const people = document.getElementById('people');

  // スタートボタンを押して回答者抽選開始
  people_shuffle_button.addEventListener('click', () => {
      if (peopleIsRunning == true) {
          // ボタンのラベルを変更
          people_shuffle_button.textContent = 'Stop';
          // 抽選処理を走らせる
          startPeopleLottery(allMember,people);
          // 次回ボタン押下時に抽選ストップ処理を走らせるために抽選処理判定用変数にfalseを挿入
          peopleIsRunning = false;   
      } else {
          // ボタンのラベルを変更
          people_shuffle_button.textContent = 'Start';
          // 抽選ストップ処理を走らせる
          stopPeopleLottery(people);
          // 次回ボタン押下時に抽選処理を走らせるために抽選処理判定用変数にfalseを挿入
          peopleIsRunning = true; 
      }
  });

  // ランダムにメンバーを取得する関数
  function getRandomMember(memberList) {
      const randomMemberIndex = Math.floor(Math.random() * memberList.length);
      return memberList[randomMemberIndex]; //ランダムに選ばれたメンバーを返す
  }


  //  回答者抽選開始の関数
  // ルーレット表示するため、80ミリ秒ごとにメンバーを切り替えて表示
  function startPeopleLottery(memberList) {
      const photoImage = document.getElementById("photoImage"); // 画像を更新する要素
      const answerName = document.querySelector(".answerName"); // 名前を更新する要素    

      interval = setInterval(() => {
          const randomMember = getRandomMember(memberList);
          photoImage.src = randomMember.image;    //画像を更新
          photoImage.alt = randomMember.text;     //画像の代替テキストを更新
          answerName.textContent = randomMember.text;     //名前を更新
      }, 80);
  }

  // 回答者抽選停止の関数
  // 最終的なメンバーの情報を表示
  function stopPeopleLottery(memberList) {
      clearInterval(interval); // ランダム表示を停止
      const randomMember = getRandomMember(memberList);   //最後に選ばれたメンバーを表示
      const photoImage = document.getElementById('photoImage');
      const answerName = document.querySelector('.answerName');

      photoImage.src = randomMember.image;
      photoImage.alt = randomMember.text;
      answerName.textContent = randomMember.text;
  }

  // 2回目のお題抽選
  const answer_shuffle_button = document.getElementById('answer_shuffle_button');
  const answer_themes = document.getElementById('answer_themes');
  answer_shuffle_button.addEventListener('click', () => {
      if (answerIsRunning == true) {
          // ボタンのラベルを変更
          answer_shuffle_button.textContent = 'Stop';
          // 抽選処理を走らせる
          startLottery(selectedThemes, answer_themes); 
          // 次回ボタン押下時に抽選ストップ処理を走らせるために抽選処理判定用変数にfalseを挿入
          answerIsRunning = false;
      } else {
          // ボタンのラベルを変更
          answer_shuffle_button.textContent = 'Start';
          // 抽選ストップ処理を走らせる
          stopLottery(selectedThemes, answer_themes);
          // 次回ボタン押下時に抽選処理を走らせるために抽選処理判定用変数にtrueを挿入
          answerIsRunning = true;
      }
  });
