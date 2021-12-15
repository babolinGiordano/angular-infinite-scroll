import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * This base class provides functionality to derived component class to allow for automatically
 * unsubscribe from subscribed observable with the following pipe:`.pipe(takeUntil(this.destroy$))`
 */
@Injectable()
export abstract class BaseDestroyable implements OnDestroy {
    private readonly destroySource = new Subject();
    protected destroy$ = this.destroySource.asObservable();

    public ngOnDestroy(): void {
        this.destroySource.next();
        this.destroySource.complete();
    }

}
