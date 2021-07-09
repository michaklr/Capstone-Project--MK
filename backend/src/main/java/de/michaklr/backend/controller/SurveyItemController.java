package de.michaklr.backend.controller;

import de.michaklr.backend.model.SurveyItem;
import de.michaklr.backend.service.SurveyItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/survey")
public class SurveyItemController {


    private final SurveyItemService service;

    @Autowired
    public SurveyItemController(SurveyItemService service) {
        this.service = service;
    }

    @GetMapping
    public List<SurveyItem> listItems() {
        return service.listItems();
    }
}
