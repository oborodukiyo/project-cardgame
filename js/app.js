var CARDS = {
  CardInformation: function(index, title, stars, imageURL, discription, atk, def) {
    var cardIndex = index;
    var cardTitle = title;
    var cardStars = stars;
    var cardImage = imageURL;
    var cardDiscription = discription;
    var cardAttack = atk;
    var cardDefence = def;
    var info = `
      <div class="card rounded-0 bg-card">
        <div class="content p-2">
          <!-- カード名とスター -->
          <div class="h-15">
            <div class="text-center fw-900 p-1">${cardTitle}</div>
            <hr class="mx-0 my-0">
            <div class="text-right mr-3 fw-900"><i class="fas fa-star mr-1 align-baseline text-warning"></i>${cardStars}</div>
          </div>

          <!-- カードイメージ -->
          <div class="text-center bg-dark h-45 centering">
            <img class="w-40 m-3" src="${cardImage}" alt="#">
          </div>

          <!-- カードの説明 -->
          <div class="fs-0p8em bg-discription p-1 h-40 d-flex flex-column justify-content-between">
            <p>${cardDiscription}</p>
            <div>
              <hr class="mx-2 my-0">
              <div class="d-flex justify-content-end">
                <div class="mr-1"><strong>攻撃力</strong>/${cardAttack}</div>
                <div class="mr-1"><strong>防御力</strong>/${cardDefence}</div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    return info
  },

  displayCard: function(target, info){
    var targetTag = document.getElementById(target);
    targetTag.innerHTML = info;
  }
}


var card1 = CARDS.CardInformation(1,'カオス・エンペラー・ドラゴン',8,'img/dragon.svg','このカードは、墓地にある光属性と闇属性モンスターを一体ずつプレイから除外することによって特別召喚できる。自身のライフポイントを1000削り、プレーヤー全員の手札とフェールド上のカードを墓地へ送ることができる。',3000,2400)

var card2 = CARDS.CardInformation(1,'グリム・リーパー',5,'img/grimreaper.svg','このカードは、召喚とともにフェールド上のカードを全て墓地へ送ることができる。召喚後は山札に戻し、シャッフルをする。',1000,1600)
