package de.michaklr.backend.service;

import de.michaklr.backend.model.SurveyItem;
import de.michaklr.backend.repository.SurveyItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyItemService {

    private final SurveyItemRepository surveyItemRepository;

    @Autowired
    public SurveyItemService(SurveyItemRepository surveyItemRepository) {
        this.surveyItemRepository = surveyItemRepository;
    }

    public List<SurveyItem> listItems(){
        return surveyItemRepository.findAll();
    }


}
