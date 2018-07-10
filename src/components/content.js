import React, {Component} from 'react';

class Content extends Component {
  render() {
    const data = this.props.data
    console.log(data);

    return(
      <div className="card_content">
        <p>
          Ladies and gentlemen, this is <span className="card_content_label">1</span> <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <span className="card_content_label">2</span> <b>{data.pluralNoun}</b> and the <span className="card_content_label">3</span> <b>{data.adjectiveOne}</b> Yankees. <span className="card_content_label">4</span> <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <span className="card_content_label">5</span> <b>{data.adjectiveTwo}</b> ball that just cuts the inside of the <span className="card_content_label">6</span> <b>{data.nounOne}</b> for a strike. That makes the count <span className="card_content_label">7</span> <b>{data.numberOne}</b> strikes and <span className="card_content_label">8</span> <b>{data.numberTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <span className="card_content_label">9</span> <b>{data.nounTwo}</b> out to <span className="card_content_label">10</span> <b>{data.adjectiveThree}</b> field. But <span className="card_content_label">11</span> <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <span className="card_content_label">12</span> <b>{data.celebThree}</b>, the Cleveland <span className="card_content_label">13</span> <b>{data.adjectiveFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <span className="card_content_label">14</span> <b>{data.nounThree}</b>. <span className="card_content_label">15</span> <b>{data.celebFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <span className="card_content_label">16</span> <b>{data.adjectiveFive}</b> League!
        </p>
      </div>
    )
  }
}

export default Content;
