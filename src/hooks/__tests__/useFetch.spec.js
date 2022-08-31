import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../useFetch";


describe('useFetch hook test', () => {
    
    test('should return the initial state', () => {
        // loading en true, data como [], y error como null
        const { result  } = renderHook( () => useFetch('https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter') );
        const { data, loading } = result.current;

        expect( data.length ).toBe(0);
        expect( loading ).toBeTruthy();
    })

    test('should return data and loading false', async () => {
        const { result  } = renderHook( () => useFetch('https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter') );
        
        await waitFor(
            () => expect( result.current.data.length ).toBeGreaterThan(0)
        );

        const { data, loading } = result.current;

        expect( data.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();
    })
})