package de.michaklr.backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ViewportDto {
    private NorthEastDto northeast;
    private SouthWestDto southwest;
}
