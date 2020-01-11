	//現在の日時を取得
var now = new Date();
var Year = now.getFullYear();
var Month = now.getMonth()+1;
var date = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();
var Sec = now.getSeconds();


//アプリを実行したときの１回目に実行するためのフラグ
var fastFlag=0;



let flag; //実行すべき機能の判別
document.addEventListener("init", (event) => {
	//localStorage.clear();


	if(fastFlag==0){//アプリを実行したときの一回目に実行すること
		for(var i=0;i<41;i++){
			localStorage.setItem('attendance'+i.toString(),0);
			localStorage.setItem('late'+i.toString(),0);
			localStorage.setItem('absence'+i.toString(),0);
			
		}

		fastFlag=1;
	}


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
			

						//回数を入力する
						var attendance= document.getElementById("attendance" + pageNum.toString());
						var late=document.getElementById("late" + pageNum.toString());
						var absence=document.getElementById("absence" + pageNum.toString());

					
						var attendanceCount=document.getElementById("attendanceCount" + pageNum.toString());
						var lateCount=document.getElementById("lateCount" + pageNum.toString())
						var absenceCount=document.getElementById("absenceCount" + pageNum.toString())

						attendanceDetails=document.getElementById('attendanceDetails'+pageNum.toString());
						attendanceTime=document.getElementById('attendanceTime'+pageNum.toString());

						lateDetails=document.getElementById('lateDetails'+pageNum.toString());
						lateTime=document.getElementById('lateTime'+pageNum.toString());


						//出欠回数０回を表示するために記述している
						absenceDetails=document.getElementById('absenceDetails'+pageNum.toString());
						absenceTime=document.getElementById('absenceTime'+pageNum.toString());
						var lateCoutnt = localStorage.getItem('late'+pageNum.toString());
						document.getElementById("lateCount" + pageNum.toString()).innerText=lateCoutnt+"回";
						var attendanceCoutnt = localStorage.getItem('attendance'+pageNum.toString());
						document.getElementById("attendanceCount" + pageNum.toString()).innerText=attendanceCoutnt+"回";
						var absenceCoutnt = localStorage.getItem('absence'+pageNum.toString());
						document.getElementById("absenceCount" + pageNum.toString()).innerText=absenceCoutnt+"回";

						attendance.addEventListener("click", () => {//出席ボタンを押したときの処理
							var attendanceCoutnt = localStorage.getItem('attendance'+pageNum.toString());
						
							attendanceCoutnt++;
							localStorage.setItem('attendance'+pageNum.toString(), attendanceCoutnt);
							attendanceTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+Year + '年' + Month + '月' + date + '日' + Hour +'時' + Min + '分'+ Sec+'秒</ons-list-item><br>');
							document.getElementById("attendanceCount" + pageNum.toString()).innerText=attendanceCoutnt+"回";

						});
						late.addEventListener("click", () => {//遅刻ボタンを押したときの処理
							var lateCoutnt = localStorage.getItem('late'+pageNum.toString());
							lateCoutnt++;
							localStorage.setItem('late'+pageNum.toString(), lateCoutnt);
							lateTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+Year + '年' + Month + '月' + date + '日' + Hour +'時' + Min + '分'+ Sec+'秒</ons-list-item><br>');
							document.getElementById("lateCount" + pageNum.toString()).innerText=lateCoutnt+"回";
						});
						absence.addEventListener("click", () => {//欠席ボタンを押したときの処理
							var absenceCoutnt = localStorage.getItem('absence'+pageNum.toString());
							absenceCoutnt++;
							localStorage.setItem('absence'+pageNum.toString(), absenceCoutnt);
							absenceTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+Year + '年' + Month + '月' + date + '日' + Hour +'時' + Min + '分'+ Sec+'秒</ons-list-item><br>');
							document.getElementById("absenceCount" + pageNum.toString()).innerText=absenceCoutnt+"回";
						});

						attendanceCount.addEventListener("click", () => {//出席回数の詳細を表示
							attendanceDetails.style.display='block';
						});

						lateCount.addEventListener("click", () => {//出席回数の詳細を表示
							lateDetails.style.display='block';
						});

						absenceCount.addEventListener("click", () => {//出席回数の詳細を表示
							absenceDetails.style.display='block';
						});

						


						break;
				case 1: //メモ
						var content = localStorage.getItem("content" + pageNum.toString());
						var memo = document.getElementById("memo" + pageNum.toString());
						var saveMemo=document.getElementById("saveMemo" + pageNum.toString());
						document.forms.memoForm0;
                        document.forms.memoContent0; 

						saveMemo.addEventListener("click", () => {//欠席ボタンを押したときの処理
							console.log("メモ０を保存します");
							memoContent0Js = document.memoForm0.memoContent0.value;
							localStorage.setItem('content0', memoContent0Js);
							console.log(memoContent0Js);
							memo.innerHTML = memoContent0Js;
							// document.write('<textarea></textarea>');
						});

							
						
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