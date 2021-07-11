package de.michaklr.backend.Dto;

import de.michaklr.backend.model.Therapist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResultsDto {

    private List<Therapist> results;


}
