import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import * as authorActions from "../../actions/authorActions";
import AuthorList from "./AuthorList";
import { withRouter } from "react-router-dom";

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // hook up scope
        this.handleRedirectToAddAuthorPage = this.handleRedirectToAddAuthorPage.bind(
            this,
        );
    }

   
    // hanle component events
    handleRedirectToAddAuthorPage() {
        this.props.history.push("/author");
    }


    render() {
       
        const { authors } = this.props;

        return (
            <div>
                <h1>Authors</h1>
                <input
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.handleRedirectToAddAuthorPage}
                />
                <AuthorList authors={authors} />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors, 
    };
}

// REDUX
function mapDispatchToProps(dispatch) {
    return {
       
        actions: bindActionCreators(authorActions, dispatch),
    };
}


// REDUX - connect component
export default withRouter(
    reduxConnect(mapStateToProps, mapDispatchToProps)(AuthorsPage),
);
