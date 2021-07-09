package de.michaklr.backend.controller;

import de.michaklr.backend.Dto.AnswersDto;
import de.michaklr.backend.Dto.ResultAnswers;
import de.michaklr.backend.model.SurveyItem;
import de.michaklr.backend.service.SurveyAnswerService;
import de.michaklr.backend.service.SurveyItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/survey")
public class SurveyItemController {

    private final SurveyItemService service;
    private final SurveyAnswerService answerService;


    @Autowired
    public SurveyItemController(SurveyItemService service, SurveyAnswerService answerService) {
        this.service = service;
        this.answerService = answerService;
    }

    @GetMapping
    public List<SurveyItem> listItems() {
        return service.listItems();
    }

    @PostMapping
    public ResultAnswers answersFromUser(@RequestBody AnswersDto answersDto) {
        return answerService.evaluateAnswers(answersDto);
    }


}
