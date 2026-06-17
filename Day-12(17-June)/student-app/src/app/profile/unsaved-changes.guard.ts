import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './profile.component';

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component
) => {
  return component.canDeactivate();
};
