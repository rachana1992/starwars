import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { fetchCharacters, fetchCharactersById, requestFilm, changeChar } from "../actions/Actions";

export class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacters());
  }
  changeChar = (v)=>{
    this.props.dispatch(fetchCharactersById(v.target.selectedIndex))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-primary bg-primary" role="alert">
              <h1 className="d-flex justify-content-center text-warning">Star Wars</h1>
            </div>
              <div><h1>{this.props.loading ? 'Loading Data' : ''}</h1></div>
              <h3 className="text-primary">Character</h3>
            <div className="row">
              <div className="col-6">
                <select
                  type="select"
                  onChange={this.changeChar}
                  className="form-control"
                >
                  {this.props.chars && this.props.chars.map((x, i) => (
                    <option value={i + 1}>{x.name}</option>
                  ))}
                </select>
                    <br/>
                    <br/>
                    <h3 className="text-primary">List of movies</h3>
                <ul className="list-group">
                  {this.props.filmLists && this.props.filmLists.map((x,i)=><li className="list-group-item">Film {i+1} </li>                  )}
                </ul>
                <br></br>
				<h5>
					<span className="text-primary">Last Film :</span> {this.props.lastFilmDetails && this.props.lastFilmDetails.title}
				</h5>
				<h5>
        <span className="text-primary">Release date :</span> {this.props.lastFilmDetails && this.props.lastFilmDetails.release_date}
				</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  chars: state.chars,
  selectedChar: state.selectedChar,
  filmLists: state.filmLists,
  lastFilmDetails: state.lastFilmDetails,
});

export default connect(mapStateToProps)(Home);
