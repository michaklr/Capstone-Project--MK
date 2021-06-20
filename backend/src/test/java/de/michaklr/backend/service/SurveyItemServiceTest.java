package de.michaklr.backend.service;

import de.michaklr.backend.model.SurveyItem;
import de.michaklr.backend.repository.SurveyItemRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class SurveyItemServiceTest {

    private final SurveyItemRepository repository = mock(SurveyItemRepository.class);
    private final SurveyItemService service = new SurveyItemService(repository);

    @Test
    public void listSurveyItemsShouldReturnItemsFromRepository(){
    // GIVEN
    when(repository.findAll()).thenReturn(List.of(
            new SurveyItem("Funktioniert das?","3"),
            new SurveyItem("Order funktioniert das nicht?","4")
            ));

    // WHEN
    List<SurveyItem> surveyItems = service.listItems();

    // THEN
    assertThat(surveyItems,containsInAnyOrder(
            new SurveyItem("Funktioniert das?","3"),
            new SurveyItem("Order funktioniert das nicht?","4")
    ));

    }

    }

