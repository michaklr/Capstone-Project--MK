package de.michaklr.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "survey")
@NoArgsConstructor
@AllArgsConstructor

public class SurveyItem {
    private String question;
    private String questionNumber;

}
