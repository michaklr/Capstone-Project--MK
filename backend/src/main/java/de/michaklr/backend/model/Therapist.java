package de.michaklr.backend.model;

import de.michaklr.backend.Dto.GeometryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="therapist")
@NoArgsConstructor
@AllArgsConstructor

public class Therapist {

    private String name;
    private String place_id;
    private String vicinity;
    private String reference;
    private String types;
    private String rating;
    private GeometryDto geometry;
    private String icon;

}
