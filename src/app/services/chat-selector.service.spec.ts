import { TestBed } from '@angular/core/testing';

import { ChatSelectorService } from './chat-selector.service';

describe('ChatSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatSelectorService = TestBed.get(ChatSelectorService);
    expect(service).toBeTruthy();
  });
});
