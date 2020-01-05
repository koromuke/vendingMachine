

// ********************************************************************
// * 変数宣言
// ********************************************************************

const coin_Variety = [500, 100, 50, 10],
    change_Inventory = {
        500 : 100,
        100 : 100,
        50 : 100,
        10 : 100
    };


// ********************************************************************
// * クラス
// ********************************************************************

// 人間クラス
class Person {
  constructor() {
  }

  // 入荷
  arrival() {
      if ( arrival_Form.style.display == "none" ) {
            return arrival_Form.style.display = "block";
      }

      if ( arrival_Form.style.display == "block" ) {
        return arrival_Form.style.display = "none";
      }
  }

  // 入荷内容確認メソッド
  arrival_Confirm() {
      let item_name = document.getElementById("item_name").value,
        item_price = document.getElementById("item_price").value,
        item_stock = document.getElementById("item_stock").value,
        item_notation = document.getElementById("item_notation").value,
        item = new Product(item_name, item_price, item_stock, item_notation);

      console.log(item);
      console.log(lineup);
  }
}

// 商品クラス
class Product {
    constructor(name, price, stock, notation) {
        this.name = name,
        this.price = price,
        this.stock = stock,
        this.notation = notation;
    }

}

// ********************************************************************
// * インスタンス生成
// ********************************************************************

const person = new Person(),
    cola = new Product("cola", 150, 5, "コーラ"),
    milktea = new Product("milktea", 120, 0, "ミルクティ"),
    coffee = new Product("coffee", 80, 5, "コーヒー"),
    tea = new Product("tea", 130, 5, "お茶"),
    water = new Product("tea", 100, 5, "おいしい水");
let items = { 
        purchase1: cola,
        purchase2: milktea,
        purchase3: coffee,
        purchase4: tea,
        purchase5: water
    };



// ********************************************************************
// * function
// ********************************************************************

// 半角英数字チェック
checkArrivalFormNum = (e) => {
//   return e.value.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, function(s){
//     return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
// });
}


// 半角英字チェック
checkArrivalFormHalf = (e) => {
  // let str = e.value;
  // while ( str.match(/[^A-Z^a-z\d\-]/) ) {
  //     str = str.replace(/[^A-Z^a-z\d\-]/,"");
  // }
  // e.value = str;
}

// 
checkNum = (e) => {
     num = e.value;
     num_length = num.length;
     if ( num.match(/^[0-9]+$/) ) {
          if( num_length > 1 ){
               e.value = e.value.slice( 0, -1);
          }
          
     } else {
         //　全角入力を受け付けない
          e.value = e.value.slice( 0, -1);
     }
}


change_sold_out = (e) => {            
    const no_Stock_Tag = document.getElementById(e);
    no_Stock_Tag.disabled = "disabled";
    document.getElementById(keys).defaultValue = "sold out";
}

check_Stock = () => {
    for ( keys in items) {
        if ( items[keys].stock == 0 ) {
            change_sold_out(keys);
        }
    }
}

check_Change = (e) => {
    for ( c of change_Inventory) {
        if ( change_Inventory[c] == 0) {
            coin_Tag = document.getElementById(e);
        }
    }
}

set_vendingMachine_Show = () => {
    // 全体
    const vendingMachine_Show = '<form>'
        + '<table border="1" width=85%>'

        // 商品名表示部分
        + '<tr>' 
        + '<th id="item1">' + cola.notation +'</th>'
        + '<th id="item2">' + milktea.notation +'</th>'
        + '<th id="item3">' + coffee.notation +'</th>'
        + '<th id="item4">' + tea.notation +'</th>'
        + '<th id="item5">' + water.notation +'</th>'
        + '</tr>'
        + '<tr>'

        // 価格表示部分
        + '<th id="price1">' + cola.price + '</th>'
        + '<th id="price2">' + milktea.price + '</th>'
        + '<th id="price3">' + coffee.price + '</th>'
        + '<th id="price4">' + tea.price + '</th>'
        + '<th id="price5">' + water.price + '</th>'
        + '</tr>'
        + '<tr>'

        // 購入ボタン部分
        + '<th><input type="button" id="purchase1" onclick="purchase(this)" class="select_button" value="select"/></th>'
        + '<th><input type="button" id="purchase2" onclick="purchase(this)" class="select_button" value="select"/></th>'
        + '<th><input type="button" id="purchase3" onclick="purchase(this)" class="select_button" value="select"/></th>'
        + '<th><input type="button" id="purchase4" onclick="purchase(this)" class="select_button" value="select"/></th>'
        + '<th><input type="button" id="purchase5" onclick="purchase(this)" class="select_button" value="select"/></th>'
        + '</tr>'
        + '</table>'

        + '<div>'
        + '<p id="no_Change">釣り銭切れ : </p>'
        + '</div>'

        // 支払い金額入力部分
        + '<div class="inputMoneyForm">'
        + '<p style="margin-bottom:0px;">支払い</p>'
        + '<label for="m1000">1000:</label>'
        + '<input type="number" class="coin" value="0" id="m1000" min="0" onkeydown="return event.keyCode !== 69" onpaste="return false" oninput="checkNum(this)" required>'
        + '<label for="m500">500:</label>'
        + '<input type="number"  class="coin" value="0" id="m500" min="0" onkeydown="return event.keyCode !== 69" onpaste="return false" oninput="checkNum(this)" required>'
        + '<label for="m100">100:</label>'
        + '<input type="number"  class="coin" value="0" id="m100" min="0" onkeydown="return event.keyCode !== 69" onpaste="return false" oninput="checkNum(this)" required>'
        + '<label for="m50">50:</label>'
        + '<input type="number"  class="coin" value="0" id="m50" min="0" onkeydown="return event.keyCode !== 69" onpaste="return false" oninput="checkNum(this)" required>'
        + '<label for="m10">10:</label>'
        + '<input type="number"  class="coin" value="0" id="m10" min="0" onkeydown="return event.keyCode !== 69" onpaste="return false" oninput="checkNum(this)" required>'
        + '</div>'
        + '</form>'

        // 支払い or 釣り銭不足表示部分
        + '<div id="sentence"></div>'

        // TODO:　入荷フォーム部分 入荷未実装
        + '<input type="button" class="arrival" id="arrival" value="入荷" onclick="person.arrival()">'
        + '<div id="arrival_Form"></div>'

        document.write(vendingMachine_Show);
        check_Stock();
}

// arrival_From 設定
set_Arrival_Form = () => {
    const arrival_form_innerHTML = 
        '商品名<input type="text" class="item_Form" id="item_name" placeholder="例：cola" oninput="checkArrivalFormHalf(this)" required ><br/>'
        + '商品価格<input type="number" class="item_Form" id="item_price" min="0" placeholder="例：150" oninput="checkArrivalFormNum(this)" required><br/>'
        + '商品の数<input type="number" class="item_Form" id="item_stock" placeholder="例：5" oninput="checkArrivalFormNum(this)" required><br/>'
        + '商品表示名<input type="text" class="item_Form" id="item_notation" placeholder="例：コーラ(150ml)" required><br/>'
        + '<input type="button" class="arrival" id="arrival_Confirm" value="確認" onclick="person.arrival_Confirm()">'
    
    const arrival_Form = document.getElementById("arrival_Form");
    arrival_Form.innerHTML = arrival_form_innerHTML
    arrival_Form.style.display = "none";
}

// 釣り銭切れ表示 & リストを返す
refresh_No_Change_Status = () => {
    const no_Change_ele = document.getElementById('no_Change');
    let no_Change_Coins = [];
    for ( let c in change_Inventory) {
        if ( change_Inventory[c] == 0 ) {
            no_Change_Coins.push(c + "円玉");
        }
    }
    no_Change_ele.innerHTML = "釣り銭切れ : " + no_Change_Coins;
    return no_Change_Coins;
}

// 購入
purchase = (e) => {

    // TODO: price
    const m1000 = document.getElementById("m1000").value,
        m500  = document.getElementById("m500").value,
        m100  = document.getElementById("m100").value,
        m50   = document.getElementById("m50").value,
        m10   = document.getElementById("m10").value,
        sentence = document.getElementById("sentence"),
        pay = m1000 * 1000 + m500 * 500 + m100 * 100 + m50 * 50 + m10 * 10,
        pay_Coins = [parseInt(m500), parseInt(m100), parseInt(m50), parseInt(m10)],
        selected_Button_Id = e.id,
        selected_Item = items[selected_Button_Id],
        price = selected_Item.price,
        current_Item_Stock = selected_Item.stock;

    let coinValue,
        change = pay - price,
        total_Change = change,
        result_Change = {},
        coin_Count = [],
        pay_Coins_Count = {};
    
    // 金額不足
    if (change < 0) {
        sentence.textContent = '支払い不足';
        return;
    }
  
    // 支払った小銭の枚数をオブジェクト連想配列にまとめる
    for (let i = 0; i < coin_Variety.length; i++) {
        let c = coin_Variety[i]
        pay_Coins_Count[c] = pay_Coins[i];
    }

    // 支払われた小銭を釣り銭在庫に追加
    for (let c of coin_Variety) {
        change_Inventory[c] += pay_Coins_Count[c];
    }

    // 釣り切れ表示更新と新しい小銭リスト作成
    let no_Change_List = refresh_No_Change_Status();

    
    //? 釣り銭切れした硬貨を計算に使わないようにする？
    // 釣り銭計算
    for (let v of coin_Variety) {
        coinValue = parseInt(v, 10);
        result_Change[v] = Math.floor(change / coinValue);
        change -= result_Change[v] * coinValue;
    }

    //TODO:     ! 釣り銭切れの際の処理未実装 !

    // 釣り銭表示 & 釣り銭在庫から減らす
    for (let keys of Object.keys(result_Change)) {
        coin_Count.push(keys + "円 : " + result_Change[keys] + "枚");
        
        // 更新
        change_Inventory[keys] -= result_Change[keys];
    }
    sentence.innerHTML = "お釣り<br>" + coin_Count.join('<br>') + "<br>釣り銭合計:" + total_Change + "円"; 

    // 釣り銭更新
   refresh_No_Change_Status();
    // 商品在庫在庫更新
    selected_Item.stock = current_Item_Stock - 1;
    // 購入ボタン更新
    check_Stock();
}

// ********************************************************************
// * 画面
// ********************************************************************

// 全体表示設定
set_vendingMachine_Show();

// 入荷ボタン押下時表示設定 
set_Arrival_Form();

// 釣り銭切れ表示
window.addEventListener('load', function(){ refresh_No_Change_Status(); }, false);



