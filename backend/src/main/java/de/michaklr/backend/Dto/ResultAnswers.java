package de.michaklr.backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResultAnswers {
    String depressionResult;
    String angstResult;
    String zwangResult;
    String somaResult;
    String essVerhaltenResult;
    String zusatzResult;
    String gesamtResult;

}
