package de.michaklr.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class SurveyItem {
    private String question;
    private String questionNumber;

}
