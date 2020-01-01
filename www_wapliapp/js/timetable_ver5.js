let flag; //実行すべき機能の判別
document.addEventListener("init", (event) => {

		var pageNum; //ページの番号を代入する
		if (event.target.id = "ons-timetable.html") {
			
				// 詳細ページを開く
				a = document.getElementsByClassName('a');
				lecturePage = document.querySelectorAll('[id^=lecturePage]');
				var lecturePageListItem = document.getElementsByClassName('lecturePageListItem');
				lecture = document.getElementById("1_lecture")
				for (let i = 0; i < a.length; i++) {
						a[i].addEventListener("click", () => {
								console.log(i);
								lecture.pushPage('lecturePage' + i.toString());
								localStorage.setItem('num', i);
						});
				}
				//詳細の表示
				var pageNum = localStorage.getItem('num'.toString());
				for (let j = 0; j < lecturePageListItem.length; j++) {
						lecturePageListItem[j].addEventListener("click", () => {
								console.log(j);
								switch (j) {
								case 0: //出欠
								lecture.pushPage('attendanceConfirmation' + pageNum.toString());
								flag=0;
														break;
								case 1: //メモ
									lecture.pushPage('memo' + pageNum.toString());
									flag=1;
														break;
								case 2: //シラバス
									lecture.pushPage('syllabus' + pageNum.toString());
									flag=2;
										break;
								case 3: //e-class
									flag=3;
														break;
								case 4: //評価基準
									lecture.pushPage('EvaluationCriteria' + pageNum.toString());
									flag=4;
										break;
								case 5: //休講情報
									flag=5;
										break;
								case 6: //科目登録
										lecture.pushPage('courseRegistration' + pageNum.toString());
										flag = 6;
										break;
								default:
										alert("エラー");
										break;
								}
						});
				}
				//各ページの機能
				console.log("flagは" + flag);
				switch (flag) {
				case 0: //出欠
						var attendance= document.getElementById("attendance" + pageNum.toString());
						var late=document.getElementById("late" + pageNum.toString());
						var absence=document.getElementById("absence" + pageNum.toString());
						
						attendance.addEventListener("click", () => {//出席ボタンを押したときの処理
							var attendanceCoutnt = localStorage.getItem('attendance'+pageNum.toString());
							attendanceCoutnt++;
							localStorage.setItem('attendance'+pageNum.toString(), attendanceCoutnt);
							document.getElementById("attendanceCount" + pageNum.toString()).innerText=attendanceCoutnt+"回";

						});
						late.addEventListener("click", () => {//遅刻ボタンを押したときの処理
							var lateCoutnt = localStorage.getItem('late'+pageNum.toString());
							lateCoutnt++;
							localStorage.setItem('late'+pageNum.toString(), lateCoutnt);
							document.getElementById("lateCount" + pageNum.toString()).innerText=lateCoutnt+"回";
						});
						absence.addEventListener("click", () => {//欠席ボタンを押したときの処理
							var absenceCoutnt = localStorage.getItem('absence'+pageNum.toString());
							absenceCoutnt++;
							localStorage.setItem('absence'+pageNum.toString(), absenceCoutnt);
							document.getElementById("absenceCount" + pageNum.toString()).innerText=absenceCoutnt+"回";
						});



						detailLists='details'+pageNum.toString();
						document.getElementById("attendanceCount" + pageNum.toString()).addEventListener("click", () => {//欠席ボタンを押したときの処理
						console.log(detailLists);
								//detailLists.style.display = 'block';
				
						});
						


						break;
				case 1: //メモ
						var content = localStorage.getItem("content" + pageNum.toString());
						var memo = document.getElementById("memo" + pageNum.toString());
						memo.innerHTML = content;

						function saveStorage() {
								console.log("メモ０を保存します");
								memoContent0Js = document.memoForm0.memoContent0.value;
								localStorage.setItem('content0', memoContent0Js);
								console.log(memoContent0Js);
								memo0.innerHTML = memoContent0Js;
								// document.write('<textarea></textarea>');
						}
						break;
				case 2: //シラバス
						break;
				case 3: //e-class
						break;
				case 4: //評価基準
						break;
				case 5: //休講情報
						break;
				case 6: //科目登録
						determineCourseCode = document.getElementById('determineCourseCode' + pageNum.toString());
						determineCourseCode.addEventListener("click", () => {
								var input_message = document.forms.CourseCodeInput.CourseCodeInputContent.value;
								input_message = input_message.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => { //文字列を半角に変換しています。
										return String.fromCharCode(s.charCodeAt(0) - 65248);
								});
								console.log("科目選択の入力内容は" + input_message);
						});
            break;
        }
        flag=-1;
		}
});