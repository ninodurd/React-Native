import React from 'react';
import { StyleSheet, ListView, View ,} from 'react-native';
import { connect } from "react-redux"
import _ from 'lodash'
import PersonItem from './PersonItem'
import Icon from 'react-native-vector-icons/EvilIcons'
import PeopleDetail from './PeopleDetail'
import {loadInitialContacts} from '../actions'




class PeopleList extends React.Component {

  static navigationOptions = ({
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'user'}
        size={65}
        style={{ color: tintColor }}

      />
    )
  })

  componentWillMount() {
    this.props.loadInitialContacts()
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.people)

    if (this.props.detailView === true) {
      return (
        <PeopleDetail />
      )
    } else {
      return(
        <ListView
        enableEmtySections={true}
        dataSource={this.dataSource}
        renderRow={(rowData) => <PersonItem people={rowData} />}
        enableEmptySections
      />
      )
    }

  }

  render() {
    return (
      <View style={styles.container}>
            {this.renderInitialView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    flexWrap: 'wrap'

  },
});

const mapStateToProps = state => {
  const people = _.map(state.people,(val,uid)=>
  {
    return{...val,uid}
  })
  return { 
    people,
    detailView:state.detailView,
  }
}

export default connect(mapStateToProps,{loadInitialContacts})(PeopleList)