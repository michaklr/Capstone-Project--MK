package de.michaklr.backend.repository;

import de.michaklr.backend.model.SurveyItem;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SurveyItemRepository {

    private final List<SurveyItem> surveyItems = new ArrayList<>();

    public SurveyItem add(SurveyItem item){
        return null;
    }

public List<SurveyItem> listItems(){
    return List.of();

}

}
