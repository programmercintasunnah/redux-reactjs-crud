import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h4 className="display-3">{props.title}</h4>
          <p className="lead">
            berpegang teguh di atas pemahaman salafussholih.
          </p>
          <Button color="dark">
            <FontAwesomeIcon icon={faRunning} /> This My Way
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
