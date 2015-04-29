// app.jsx

var SkillList = React.createClass({
  getInitialState: function() {
    return {
      skills: [
        { skillName: 'スキル', year: 0, showDel: false }
      ]
    };
  },

  addNewSkill: function() {
    var skills = this.state.skills.concat({ skillName: '', year: 0, showDel: false });
    this.setState({ skills: skills });
  },

  render: function() {
    return (
      <div>
        <Skill skills={this.state.skills} addNewSkill={this.addNewSkill} />
      </div>
    );
  }
});

var Skill = React.createClass({
  render: function() {
    var that = this;
    var skills = this.props.skills.map(
      function(skill) {
        console.log('hoge');
        return (
          <tr>
            <td><SkillInput skillName={skill.skillName} addNewSkill={that.props.addNewSkill} /></td>
            <td>{skill.year}</td>
            <td>削除ボタン</td>
          </tr>
        );
      }
    );

    return (
      <table>
        <tr>
          <th>スキル</th>
          <th>経験年数</th>
        <th>---</th>
        </tr>
        {skills}
      </table>
    );
  }
});

var SkillInput = React.createClass({
  _onKeyDown: function(e) {
    // 13 == Enter Key Code
    if (e.keyCode === 13) {
      this.props.addNewSkill();
    }
  },

  render: function() {
    return <input type="text" onKeyDown={this._onKeyDown} defaultValue={this.props.skillName} />;
  }
});

React.render(
  <SkillList />,
  document.getElementById('app-container')
);
