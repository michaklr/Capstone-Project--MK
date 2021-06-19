package de.michaklr.backend.controller;

import de.michaklr.backend.model.SurveyItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/survey")
public class SurveyItemController {

    @GetMapping
    public List<SurveyItem> listItems(){
        return List.of(
                new SurveyItem("Meine Stimmung ist gedrückt/niedergeschlagen.", "1"),
                new SurveyItem("An Dingen, die ich normalerweise gern mache, habe ich keine richtige Freude mehr.", "2"));

    }
}
