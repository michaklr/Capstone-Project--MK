package de.michaklr.backend.controller;

import de.michaklr.backend.model.Therapist;
import de.michaklr.backend.service.TherapistApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/places")
public class TherapistController {

    private final TherapistApiService therapistApiService;

    @Autowired
    public TherapistController(TherapistApiService therapistApiService) {
        this.therapistApiService = therapistApiService;
    }

    @GetMapping
    public List<Therapist> listTherapists() {
        return therapistApiService.loadTherapists();
    }


}
