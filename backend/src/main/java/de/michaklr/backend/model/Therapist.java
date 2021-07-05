package de.michaklr.backend.model;

import de.michaklr.backend.Dto.GeometryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection="therapist")
@NoArgsConstructor
@AllArgsConstructor

public class Therapist {

    private String name;
    private String place_id;
    private String vicinity;
    private String reference;
    private int rating;
    private String icon;
    private GeometryDto geometry;
    private List<String> types;

}
