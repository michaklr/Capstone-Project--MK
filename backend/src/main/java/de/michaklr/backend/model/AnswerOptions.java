package de.michaklr.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum AnswerOptions {

    ANSWER_0 ("Trifft nicht zu"),
    ANSWER_1 ("Trifft kaum zu"),
    ANSWER_2 ("Trifft ziemlich zu"),
    ANSWER_3 ("Trifft deutlich zu"),
    ANSWER_4 ("Trifft extrem zu");


    private final String optionalAnswer;

    AnswerOptions(String optionalAnswer) {
        this.optionalAnswer = optionalAnswer;
    }
}
