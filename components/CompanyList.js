import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import CompanyItem from './CompanyItem';
import _ from 'lodash'

class CompanyList extends Component {

  static navigationOptions = ({
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'business'}
        size={65}
        style={{ color: tintColor}}

      />
    )
  })

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.companies)
    return (
      <View>
        <ListView
          enableEmtySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) => <CompanyItem companies={rowData} />}
          enableEmptySections
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  const people = _.map(state.people, (val, uid) => {
    return { ...val, uid };
  });

  const companies = _.chain(people).groupBy('company').map((value, key) => {
    return {
      company: key,
      names: value
    }
  })
    .value();

  return {
    companies
  }
}

export default connect(mapStateToProps)(CompanyList)