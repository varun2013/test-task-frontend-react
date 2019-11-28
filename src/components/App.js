import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import _ from 'lodash';
import { getUserViews } from '../app/app.action'
import { userViews } from '../app/app.selector'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      searchType: 'Today',
      totalUserViews: 0,
      totalUniqueUsers: 0
    }
  }

  componentWillReceiveProps(props) {
    if (props.userViews && _.has(props.userViews, 'data') && props.userViews.success === true) {


      this.setState({
        totalUserViews: _.sum(_.map(props.userViews.data, (dd) => dd.count)),
        totalUniqueUsers: (props.userViews.data).length
      });

    }
  }

  componentDidMount() {
    this.props.getUserViews({ startDate: '', endDate: '', searchType: 'Today' })
  }

  getViews = () => {
    const { startDate, endDate } = this.state;
    this.setState({ startDate, endDate, searchType: '' })
    this.props.getUserViews({ startDate, endDate, searchType: '' })
  }

  clearSearchData = () => {
    this.setState({ startDate: '', endDate: '', searchType: 'Today' })
    this.props.getUserViews({ startDate: new Date(), endDate: new Date(), searchType: 'Today' })
  }

  getTimelyViews = (type) => {
    this.setState({ startDate: '', endDate: '', searchType: type })
    this.props.getUserViews({ startDate: '', endDate: '', searchType: type })
  }


  render() {
    const { startDate, endDate, totalUserViews, totalUniqueUsers } = this.state

    return (
      <>
        <div className='wrapper' >
          <div className="main-panel">
            <div className="container py-5">
              <div className="text-center">
                <h2>Test Task </h2>
              </div>
              <div className="page-inner mt--5">
                <div className="row">
                  <div className="card building-representative-sec full-height shadow-sm w-100">
                    <div className="search-info collapse show px-3 d-flex justify-content-between my-3 align-items-center">
                      <div className="buttons">
                        <button className="btn btn-sm btn-info" onClick={(e) => this.getTimelyViews('Today')}>
                          Today
                        </button>
                        <button className="btn  btn-sm btn-info" onClick={(e) => this.getTimelyViews('Weekly')}>
                          Weekly
                        </button>
                        <button className="btn btn-sm btn-info" onClick={(e) => this.getTimelyViews('Monthly')}>
                          Monthly
                    </button>
                      </div>
                      <div className="form-group d-flex justify-content-between align-items-center mb-0">
                        <DatePicker className="form-control mr-2"
                          selected={startDate}
                          onChange={date => this.setState({ startDate: date })}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                        />
                        <DatePicker className="form-control mr-2"
                          selected={endDate}
                          onChange={date => this.setState({ endDate: date })}
                          selectsEnd
                          endDate={endDate}
                          minDate={startDate}
                        />
                        <button className="btn btn-sm btn-info" onClick={() => this.getViews()}>
                          View
                      </button>
                        <button className="btn btn-sm btn-dark mx-2" onClick={() => this.clearSearchData()}>
                          Reset
                      </button>
                      </div>
                    </div>
                    <div className="card-body management-list pt-0 px-3">
                      <div className="table-responsive-lg">
                        <table className="table mb-3">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Data</th>
                              <th scope="col">Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Total Unique Users</td>
                              <td>{totalUniqueUsers}</td>
                            </tr>
                            <tr>
                              <td>Total User Views</td>
                              <td>{totalUserViews}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToprops = (state) => ({
  userViews: userViews(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUserViews
}, dispatch);

export default connect(mapStateToprops, mapDispatchToProps)(App); 
