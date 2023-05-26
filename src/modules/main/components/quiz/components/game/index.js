import Component from './Game';
import { connect } from 'react-redux';
import * as selectors from '../../../../selectors';

const mapStateToProps = state => ({
    text: selectors.textSelector(state),
    answers: selectors.answersSelector(state),
    correctAnswer: selectors.correctAnswerSelector(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
